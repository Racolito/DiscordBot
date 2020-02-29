
//Usaremos Node.js , Jhonny-five , Arduino , Discord.js .Para correr el codigo en la placa y que todo funcione es recomendable usar el protocolo de firmata , que ya viene como ejemplo.


//Codigo por: @Racolito


const Discord = require('discord.js');//Binlioteca de Discord
const client = new Discord.Client();//Creación del Cliente
const five = require('johnny-five');//Usaremos labiblioteca johnny-five para este proyecto para que la placa arduino entienda Javasceipt
const board = new five.Board();

client.on('ready', () => { //Creación del Bot de DIscord
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => { 
  if (msg.content === 'Rojito on') {
    msg.reply('Rojito encendido');
    console.log(msg.content);
    
  }
  if(msg.content === 'Verdecito on') {
    msg.reply('Verdecito encendido');
    console.log(msg.content);
  }
  if(msg.content === 'Amarillito on ') {
    msg.reply('Amarillito encendido'); //Para que sea un poco mas vistoso el Bot de dicord dara una respuesta
    console.log(msg.content);
  }
  
});

board.on("ready", () =>{
      const ledRed  = new five.Led(10); //Pin del Arduino( x ) puedes poner el que mas te guste 
      const ledGreen = new five.Led(11);
      const ledYellow = new five.Led(12);


      client.on('message', msg => {
        if(msg.content === "Rojito on") ledRed.on() //Declaración del mensage en discord , el programa lo buscaray cuando lo encuentre enciende el led Rojo
        else if(msg.content === "Rojito off") ledRed.off()//Lo mmismo que antes pero apaga el led Rojo en este caso

        if(msg.content === "Verdecito on") ledGreen.on()
        else if(msg.content === "Verdecito off") ledGreen.off()

        if(msg.content === "Amarillito on") ledYellow.on()
        else if(msg.content === "Amarillito off") ledYellow.off()
      });

});






client.login('Aqui va tu token del Bot de Discord'); //Pimero se necesita elToken o llave del Bot de Discord qu este te puede dar.