import React from 'react'
import { AlbumList } from 'pages/AlbumList'
import { AlbumDetail } from 'pages/AlbumDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <AlbumList/>
      </Route>
      <Route pate="/artists/:albumId">
        <AlbumDetail />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}
