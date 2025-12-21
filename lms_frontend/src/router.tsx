import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

import HomePage from "./pages/home/HomePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import CourseDetailsPage from "./pages/CourseDetailsPage/CourseDetailsPage";
import LessonPage from "./pages/LessonPage/LessonPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import CommunityPage from "./pages/community/CommunityPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import UpdatePasswordPage from "./pages/auth/UpdatePasswordPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import InvoicePage from "./pages/invoice/InvoicePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import CoursePlayerPage from "./pages/CoursesPage/CoursePlayerPage";
import SettingsPage from "./pages/settings/SettingsPage";
import QuizPage from "./pages/quiz/QuizPage";
import QuizResultPage from "./pages/quiz/QuizResultPage";
import MentorsPage from "./pages/mentors/MentorsPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/courses", element: <CoursesPage /> },
      { path: "/courses-details", element: <CourseDetailsPage /> },
      { path: "/courses-learn", element: <LessonPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/community", element: <CommunityPage /> },
      { path: "/invoice", element: <InvoicePage /> },
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/courses-video", element: <CoursePlayerPage /> },
      { path: "/setting", element: <SettingsPage /> },
      { path: "/quiz", element: <QuizPage /> },
      { path: "/quiz-result", element: <QuizResultPage /> },
      { path: "/mentors", element: <MentorsPage /> },
    ],
  },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> },
  { path: "/update-password", element: <UpdatePasswordPage /> },
]);
