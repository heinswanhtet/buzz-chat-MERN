import { TbLogout2 } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { isLoading, logoutUser } = useAuthContext();
  return (
    <div className="mt-auto">
      <button onClick={() => logoutUser()} disabled={isLoading}>
        <TbLogout2 className="w-6 h-6 cursor-pointer" />
      </button>
    </div>
  );
};
export default LogoutButton;
