

module.exports = {
  TOKEN: "",
  language: "de",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.com/invite/ragesociety",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Jirayu",
      password: "youshallnotpass",
      host: "lava-v4.ajieblogs.eu.org",
      port:  13592,
      secure: false
    }
  ]
}
