import React from 'react';


export const Profile = () => {
    return (<div className="profile">
        <div className="profile__row">
            <div className="profile__element profile__img">
                <img src='https://sun9-18.userapi.com/c837122/v837122542/27552/QG0G4n3VdtA.jpg?ava=1' />
            </div>
            <div className="profile__element profile__info">
                <div className="profile__content">
                    <div className="profile__content profile__content_corparation">job:OAO facebook</div>
                    <div className="profile__content profile__content_balance">balance:-12 rub</div>
                    <div className="profile__content profile__content_registration">registration:09.24.2020</div>
                </div>
            </div>
        </div>
    </div>
    )
}

