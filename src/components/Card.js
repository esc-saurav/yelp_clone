import React from "react";
import { LikeIcon } from "../assets/icons";

const Card = () => {
  return (
    <div className="mt-12">
      <div className="text-3xl font-bold font-poppins text-center mt-6">Recent Activity</div>
      <div className="flex  mx-28 my-14  max-w-sm  rounded overflow-hidden  border ">
        <div>
            <div className="flex px-5 pt-4">
              <img className="w-12 rounded-full" src="https://images.unsplash.com/photo-1508930175694-ea32dca8cc79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="profile-picture"/>
              <div className="px-2 mx-2">
                <p className="font-bold">Paulina F.</p>
                <p>Added 1 photo</p>
              </div>
            </div>
              <div className="my-3">
                <p className="my-2 px-5 text-blue-500 font-bold">Hey to the Bay! Yelp Community Event: ST...</p>
                <img className="w-full" src="https://images.unsplash.com/photo-1667506057353-cb1b43782937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="com-image"/>
              </div>

              <div className="mx-5 my-2">
                <LikeIcon className="h-7 w-7"/>
              </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
