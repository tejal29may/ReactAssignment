import React from "react";
import MovieCard from "./MovieCard";
function MoviesList() {
  let movieData = [
    {
      Title: "Avatar",
      Year: "2009",
     
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      
      Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
     
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
      
      bgImage:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
    },
    {
        "Title": "I Am Legend",
        "Year": "2007",
       
        "Runtime": "101 min",
        "Genre": "Drama, Horror, Sci-Fi",
        "Director": "Francis Lawrence",
        
        "Plot": "Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.",
       
        "Awards": "9 wins & 21 nominations.",
        Poster:
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg",
      
        bgImage:
         
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg"
        
      },
      {
        "Title": "300",
        "Year": "2006",
        
        "Runtime": "117 min",
        "Genre": "Action, Drama, Fantasy",
        "Director": "Zack Snyder",
       
        "Plot": "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
       
        "Awards": "16 wins & 42 nominations.",
        "Poster":   "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg",
       
        bgImage:
         
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg"
        
      },
      {
        "Title": "The Avengers",
        "Year": "2012",
       
        "Runtime": "143 min",
        "Genre": "Action, Sci-Fi, Thriller",
        "Director": "Joss Whedon",
       
        "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        
        "Awards": "Nominated for 1 Oscar. Another 34 wins & 75 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
       
        bgImage:
          
        
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        
      },
      {
        "Title": "The Wolf of Wall Street",
        "Year": "2013",
        
        "Runtime": "180 min",
        "Genre": "Biography, Comedy, Crime",
        "Director": "Martin Scorsese",
      
        "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
       
        "Awards": "Nominated for 5 Oscars. Another 35 wins & 154 nominations.",
        "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
       
        bgImage:
          
         
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg"
        
      },
      {
        "Title": "Interstellar",
        "Year": "2014",
       
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
       
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 134 nominations.",
        "Poster":   "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
       
        bgImage: 
        
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg"
        
      },
      {
        "Title": "Game of Thrones",
        "Year": "2011–",
       
        "Runtime": "56 min",
        "Genre": "Adventure, Drama, Fantasy",
        "Director": "N/A",
       
        "Plot": "While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.",
       
        "Awards": "Won 1 Golden Globe. Another 185 wins & 334 nominations.",
        "Poster":  "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
        
        bgImage: 
         
         
          "https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
        
      },

   
  ];
  return (
    <>
      <div>
        <h3 style={{textAlign:"center", marginTop:"10%"}}>Movie Info project</h3>
        {
        movieData.map((ele, index) => {
          return <MovieCard imgsrc={ele.Poster} moviename={ele.Title} releaseYear={ele.Year} actor={ele.Director} Runtime={ele.Runtime} Genre={ele.Genre} Plot={ele.Plot} Awards={ele.Awards} bgImage={ele.bgImage}/>;
        })
        }
      </div>
    </>
  );
}

export default MoviesList;
