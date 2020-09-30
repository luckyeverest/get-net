import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPages'
import { Profile } from './pages/Profile'
import { Line } from './pages/Line'
import { Bill } from './pages/Bill'
import Call from './pages/Call'


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/profile" exact>
                    <Profile />
                </Route>
                <Route path="/call" exact>
                    <Call />
                </Route>
                <Route path="/bill" exact>
                    <Bill />
                </Route>
                <Route path="/line" exact>
                    <Line />
                </Route>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to={"/create"} />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}