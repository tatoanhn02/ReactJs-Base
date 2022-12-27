import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { STORAGE_IS_LOGGED_IN } from "../constants/constants";
import * as storage from "../../src/lib/storage";
import { withI18n } from "../shared/hoc/i18n.hoc";
import { useTranslation } from "../shared/components/i18n/i18n.hook";
import { I18n, I18nLanguages, I18nType } from "../containers/core/i18n";
import { i18n as I18NextType } from "i18next";
import { useInjection } from "../shared";

const HomePage = () => {
  const i18next: I18n<I18NextType> = useInjection(I18nType);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    () => storage.load(STORAGE_IS_LOGGED_IN) === "Yes"
  );
  useEffect(() => {
    if (!isLoggedIn) {
      <Navigate to={"/login"} />;
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    storage.save(STORAGE_IS_LOGGED_IN, "No");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return (
    <div>
      <h1>{t("welcome")}</h1>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          <div>
            <button
              type="button"
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              {t("button.sign_out")}
            </button>

            <button
              type="button"
              onClick={() => {
                i18next.changeLanguage(I18nLanguages.vn);
              }}
              className="text-white bg-blue-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              VN language
            </button>

            <button
              type="button"
              onClick={() => {
                i18next.changeLanguage(I18nLanguages.en);
              }}
              className="text-white bg-blue-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              EN language
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AppHomePage = withI18n(HomePage);
