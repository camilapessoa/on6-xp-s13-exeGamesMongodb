const gamesC = require('../models/gamesSchema');
//gamescollection

//get
const getAllGames = (req, res) =>{
  console.log(req.url);
  gamesC.gamesCollection.find((error, games) => {
    if(error){
      return res.status(500).send(error)
    }else{
      return res.status(200).send(games)
    }
  })
}


//getbyid

const getGameById = (req, res) =>{
  const idParam = req.params.id // pra puxar da url
  gamesC.gamesCollection.findById(idParam,(error, games)=>
  {
      if(error){
        return res.status(500).send(error)
      }else{
        if(games){
          return res.status(200).send(games)
        }else{
          return res.status(404).send("Game não encontrado")
        }
      }
  })

}

//PUT


const updateAllGame = (req, res) =>{
  const updatedGame = req.body
  const id = parseInt(req.params.id)

  const gamesId = games.map(allGames => allGames.id)

  const updateId = gamesId.indexOf(id)

  const updatedGameId = {id, ...updatedGame}
  games.splice(updateId, 1, updatedGameId)

  res.status(200).send(games.find(allGames=>allGames.id === id))
  console.log(updatedGameId)
}

//PATCH

const updatePartGame = (req, res) => {
  const udpdatedPart = req.body
  const id = parseInt(req.params.id)

  const gamesToUpdate = games.find(allGames => allGames.id == id)

  /* for (key in udpdatedPart) { 
    gamesToUpdate[key] = udpdatedPart[key]
  } */

  Object.keys(udpdatedPart).forEach((key)=>{
    gamesToUpdate[key] = udpdatedPart[key]
  })

  res.status(200).send(gamesToUpdate)
}



module.exports = {
  getAllGames,
  getGameById,
  /* updateAllGame,
  updatePartGame */
}