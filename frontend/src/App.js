import { AuthGoogleProvider } from "../src/context/authGoogle";
import { AppRoutes } from "./routes/routes";

export const App = () => {
  return (
    <AuthGoogleProvider>
      <AppRoutes />
    </AuthGoogleProvider>
  );
};