// SIDEBAR

const menuItems = document.querySelectorAll(".menu-item");

const removeActiveClass = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        removeActiveClass();
        item.classList.add("active");
        if (item.id != "notifications") {
            document.querySelector(".notifications-popup").style.display =
                "none";
        } else {
            document.querySelector(".notifications-popup").style.display =
                "block";
            document.querySelector(
                "#notifications .notifications-count"
            ).style.display = "none";
        }
    });
});

// MESSAGES

const messagesNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

messagesNotification.addEventListener("click", () => {
    messagesNotification.querySelector(".notifications-count").style.display =
        "none";
    messages.style.boxShadow = "0 0 1rem var(--BGCOLOR-PRIMARY)";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
});

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    });
};

messageSearch.addEventListener("keyup", searchMessage);

// THEME CUSTOMIZATION

const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
const root = document.querySelector(":root");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

const openThemeModel = () => {
    themeModal.style.display = "grid";
};

theme.addEventListener("click", openThemeModel);

const closeThemeModal = (e) => {
    if (e.target.classList.contains("customize-theme")) {
        themeModal.style.display = "none";
    }
};

themeModal.addEventListener("click", closeThemeModal);

const removeSizeSelector = () => {
    fontSizes.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizes.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");
        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
            root.style.setProperty("--TOP-LEFT", "5.4rem");
            root.style.setProperty("--TOP-RIGHT", "5.4rem");
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "12px";
            root.style.setProperty("--TOP-LEFT", "5.6rem");
            root.style.setProperty("--TOP-RIGHT", "5.6rem");
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "14px";
            root.style.setProperty("--TOP-LEFT", "5.8rem");
            root.style.setProperty("--TOP-RIGHT", "5.8rem");
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "16px";
            root.style.setProperty("--TOP-LEFT", "6rem");
            root.style.setProperty("--TOP-RIGHT", "6rem");
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "18px";
            root.style.setProperty("--TOP-LEFT", "7rem");
            root.style.setProperty("--TOP-RIGHT", "7rem");
        }
        document.querySelector("html").style.fontSize = fontSize;
    });
});

const removeColorSelector = () => {
    colorPalette.forEach((color) => {
        color.classList.remove("active");
    });
};

colorPalette.forEach((color) => {
    color.addEventListener("click", () => {
        removeColorSelector();
        let primaryHue;
        color.classList.toggle("active");
        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }
        root.style.setProperty("--PRIMARY-COLOR-HUE", primaryHue);
    });
});

let bgColorLightLightness;
let bgColorWhiteLightness;
let fondColorDarkLightness;

const changeBg = () => {
    root.style.setProperty("--BGCOLOR-LIGHT-LIGHTNESS", bgColorLightLightness);
    root.style.setProperty("--BGCOLOR-WHITE-LIGHTNESS", bgColorWhiteLightness);
    root.style.setProperty(
        "--FONT-COLOR-DARK-LIGHTNESS",
        fondColorDarkLightness
    );
};

bg2.addEventListener("click", () => {
    bgColorLightLightness = "15%";
    bgColorWhiteLightness = "20%";
    fondColorDarkLightness = "95%";
    bg2.classList.add("active");
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBg();
});

bg3.addEventListener("click", () => {
    bgColorLightLightness = "0%";
    bgColorWhiteLightness = "10%";
    fondColorDarkLightness = "95%";
    bg3.classList.add("active");
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBg();
});

bg1.addEventListener("click", () => {
    bgColorLightLightness = "95%";
    bgColorWhiteLightness = "100%";
    fondColorDarkLightness = "17%";
    bg1.classList.add("active");
    bg3.classList.remove("active");
    bg2.classList.remove("active");
    changeBg();
});
