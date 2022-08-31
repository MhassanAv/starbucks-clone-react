import React from "react";
import { DarkModeBtn, LightModeBtn, Btn } from "./styles/Btn.Styled";
import { SideBarStyled } from "./styles/SideMenu.Styled";


export default function SideBar({ modeState, darkModeHandler }) {
    return (
        <SideBarStyled
            initial={{ x: 50 }}
            animate={{ x: 10 }}
            transition={{ delay: 0 }}
            exit={{ x: 0 }}
        >
            <div>
                <ul>
                    <li>MENU</li>
                    <li>REWARDS</li>
                    <li>GIFT CARDS</li>
                    {!modeState ? (
                        <li>
                            <DarkModeBtn
                                style={{ animation: "none" }}
                                onClick={darkModeHandler}
                            />
                        </li>
                    ) : (
                        <li>
                            <LightModeBtn
                                style={{ animation: "none" }}
                                onClick={darkModeHandler}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <Btn white>Sign in</Btn>
                <Btn black>Join now</Btn>
            </div>
            <div>
                <svg
                    aria-hidden="true"
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                >
                    <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                </svg>
                Find a store
            </div>
        </SideBarStyled>
    );
}
