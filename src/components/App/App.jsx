import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../../components/Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import LogInModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {
  getItems,
  addItem,
  deleteItem,
  addUser,
  login,
  jwtBearer,
  like,
  unlike,
  updateProfile,
} from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleClickAdd = () => {
    setActiveModal("add-garment");
  };

  const handleSignUp = () => {
    closeActiveModal();
    setActiveModal("Sign up");
  };

  const handleLogin = () => {
    closeActiveModal();
    setActiveModal("Log in");
  };

  const handleEditProfile = () => {
    setActiveModal("Edit profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    addItem({ name, imageUrl, weather })
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error adding item:", err);
      });
  };

  const handleRegistrationModalSubmit = ({ email, password, name, avatar }) => {
    addUser({ email, password, name, avatar })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return jwtBearer(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedInUser(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error adding user:", err);
      });
  };

  const handleLogInModalSubmit = ({ email, password }) => {
    login({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return jwtBearer(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedInUser(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error logging in user:", err);
      });
  };

  const handleEditProfileModalSubmit = ({ name, avatar }) => {
    updateProfile({ name, avatar })
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedInUser(true);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error adding user:", err);
      });
  };

  const handleLogOut = () => {
    setCurrentUser(null);
    setIsLoggedInUser(false);
    localStorage.removeItem("jwt");
  };

  const likeItem = (id, likes) => {
    likes
      ? unlike(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : like(id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleDeleteClick = () => {
    setActiveModal("delete");
  };

  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("jwt") === null) {
      setIsLoggedInUser(false);
    } else {
      jwtBearer(localStorage.getItem("jwt"))
        .then((data) => {
          setIsLoggedInUser(true);
          setCurrentUser(data);
        })
        .catch(() => {
          setIsLoggedInUser(false);
          setCurrentUser(null);
          console.error();
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleSignUp, handleLogin }}
    >
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app">
          <div className="app__content">
            <Header handleClickAdd={handleClickAdd} weatherData={weatherData} />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleClickAdd={handleClickAdd}
                    likeItem={likeItem}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedInUser={isLoggedInUser}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      handleClickAdd={handleClickAdd}
                      likeItem={likeItem}
                      handleEditProfile={handleEditProfile}
                      handleLogOut={handleLogOut}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onDeleteClick={handleDeleteClick}
            likeItem={likeItem}
          />

          <DeleteModal
            isOpen={activeModal === "delete"}
            onClose={closeActiveModal}
            onDelete={handleDeleteItem}
            selectedCard={selectedCard}
          />

          <RegistrationModal
            isOpen={activeModal === "Sign up"}
            onClose={closeActiveModal}
            onRegistrationModalSubmit={handleRegistrationModalSubmit}
            handleLogin={handleLogin}
            alternativeText="Or log in"
          />

          <LogInModal
            isOpen={activeModal === "Log in"}
            onClose={closeActiveModal}
            onLogInModalSubmit={handleLogInModalSubmit}
            handleSignUp={handleSignUp}
            alternativeText="Or Sign up"
          />

          <EditProfileModal
            onClose={closeActiveModal}
            isOpen={activeModal === "Edit profile"}
            handleEditProfileModalSubmit={handleEditProfileModalSubmit}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
