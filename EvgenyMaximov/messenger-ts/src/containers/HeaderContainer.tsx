import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "../components/Header";
import { profileLoadAction } from "../actions/profile";
import { AppState } from "../reducers/index";

type HeaderPropsType = {
	classheader:string,
};

export const HeaderContainer:React.FC<HeaderPropsType> = ({ classheader }) => {
  const dispatch = useDispatch();

  const profile = useSelector((state:AppState) => state.profile.entries);
  const [isLoading, isError] = useSelector((state:AppState) => [
    state.profile.loading,
    state.profile.error,
  ]);

  useEffect(() => {
    if (profile) {
      dispatch(profileLoadAction());
    }
  }, []);

  const reloadProfile = ():void => {
    dispatch(profileLoadAction());
  };

	return (
		<Header
		  classheader={classheader}
		  profile={profile}
		  isLoading={isLoading}
		  isError={isError}
		  reloadProfile={reloadProfile}
		/>
	 );
};
