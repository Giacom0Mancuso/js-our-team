//-----------------------------------------------------------------MAIN----------------------------------------------------------------------------------
let ourTeam =[
    {   
        name:"Wayne Barnett",
        role:"founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    }, 
    {   
        name:"Angela Caroll",
        role:"Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    }, 
    {   
        name:"Walter Gordon",
        role:"Office Manager",
        img: "walter-gordon-office-manager.jpg",
    }, 
    {   
        name:"Angela Lopez",
        role:"Social Media Menager",
        img: "angela-lopez-social-media-menager.jpg",
    },  
    {   
        name:"Scott Estrada",
        role:"Developer",
        img: "scott-estrada-developer.jpg",
    },  
    {
        name:"Barbara Ramos",
        role:"Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },   
]

    console.log(printArrayTeam(ourTeam))

//---------------------------------------------------------------FUNZIONI-------------------------------------------------------------------------
function printObject(object) {
    let string = "";
    for (let key in object) {
        string += "\t " + object[key];
    }
    console.log(string);

}

function printArrayTeam(arrayTeam) {
    for (let i = 0; i < arrayTeam.length; i++) {

        let Team = arrayTeam[i];

        printObject(Team);
    }
    return 0;
}