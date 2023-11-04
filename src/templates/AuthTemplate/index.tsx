import { AuthType } from "./AuthType";

const AuthTemplate = ({ children }: AuthType) => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-[1_1_45%]">
        <img
          src={"/img/authside.jpg"}
          alt="authside"
          className="bg-cover object-cover h-screen rounded-sm"
        />
      </div>
      <div className="flex flex-[1_1_55%] p-6 justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;
