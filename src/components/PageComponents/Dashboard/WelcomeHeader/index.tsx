import Image from "next/image";

type Props = {};

const WelcomeHeader = ({ user, setUser }: any) => {
  return (
    <div className="container my-1 md:my-10">
      <div className="flex space-x-4 items-center">
        <div>
          {user && user?.avatar && user?.avatar?.link ? (
            <Image
              src={user?.avatar?.link}
              width={100}
              height={100}
              className="md:h-20 md:w-20 h-12 w-12 rounded-full"
              alt="Profile Pic"
            />
          ) : (
            <Image
              src={"/Avatar.svg"}
              width={100}
              height={100}
              className="md:h-20 md:w-20 h-12 w-12 rounded-full"
              alt="Profile Pic"
            />
          )}
        </div>
        <div>
          <div className="text-xl md:text-3xl text-bluePrimary font-medium">
            Welcome Back, {user?.name}
          </div>
          <div className="text-gray-500 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
