/* eslint-disable no-loss-of-precision */
// eslint-disable-next-line react-refresh/only-export-components
const CategoryListData=[
    {
        id:1,
        name:'Hospital',
        value:'Hospital',
        icon:'/hospital.png'
    },
    {
        id:2,
        name:'Volunteers',
        value:'Volunteers',
        icon:'/volunteer.png'
    },
    {
        id:3,
        name:'Fire Station',
        value:'FireStation',
        icon:'/fire-station.png'
    },
    {
        id:4,
        name:'DRA',
        value:'dra',
        icon:'/rescue.png'
    },
    {
        id:5,
        name:'Police',
        value:'Police',
        icon:'/police-station.png'
    },
    {
        id:6,
        name:'More',
        value:'More',
        icon:'/more.png'
    },
 
  
]

const Hospital=[
    {
        lat:11.921421423584407, 
        lng:79.62807432172906,
        id:1,
        description:'Manakula Vinayakar Hospital'
    },
    {
        lat:11.905367025515895, 
        lng:79.63548551331787,
        id:2,
        description:'General Hospital'
    },
    {
        lat:11.925073738462055, 
        lng:79.64516607612072,
        id:3,
        description:'Village Hospital'    
    },
]

const volunteers=[
    {
        lat: 11.924471450615812,  
        lng: 79.62431037686298,
        description:'Agilan'
    },
    {
        lat: 11.922051139713474, 
        lng: 79.6247521054678,
        description:'Chandru'     
    },
    {
        lat:11.926113792146413,  
        lng:79.63120134309818,
        description:'Sam'
    },
    {
        lat:11.914357865295676, 
        lng:79.6323498374707,
        description:'Vijay'
    },
    {
        lat:11.915222289023324,
        lng: 79.6357953205883,
        description:'John' 
    },
    {
        lat:11.922137579760296,
        lng: 79.64144944673,
        description:'Ajay'
    },
    {
        lat:11.913666324332295, 
        lng: 79.63835734649625,
        description:'Yogesh'
    },
    {
        lat:11.926632424248323,
        lng: 79.64409981835891,
        description:'jack'

    },
    {
        lat:11.917296894741598,
        lng: 79.63941749514784,
        description:'Kailash'
    },
    {
        lat:11.924557889891592, 
        lng:79.64259794110252,
        description:'Ranjith'

    },
    {
        lat:11.924990085857454, 
        lng:79.6326148746336,
        description:'Prakash'
    },
    {
        lat:11.914876519862478,
        lng: 79.64056598952035,
        description:'Arun'

    },
    {
        lat:11.9041574575506,
        lng:79.63173141742395,
        description:'Divya'
  
    },
    {
        lat:11.894734706845215, 
        lng: 79.63120134309818,
        description:'Samantha'
 
    },
]

const Fire_Station=[
    {
        lat:11.932784452445798, 
        lng:79.65244380336237,
        description:'Madhagadipet Fire Station'
    },
    {
        lat:11.870461663733153,
        lng: 79.61161561629208,
        description:'Nettapakkam Fire Station'
             
    },
    {
        lat:11.935742901424808,  
        lng:79.48014921550318,
        description:'Viluppuram Fire Station'
        
    },
]

const DRA=[
    {
        lat:11.914408031657393, 
        lng: 79.65057739411681,
        description:'Disaster Relief Agency'
    }
]

const Police=[
    {
        lat:11.92711974096599,  
        lng:79.64474201006344,
        description:'Thirubuvanai Police Station'
    },
    {
        lat:11.918385918394526,  
        lng:79.67821597930845,
        description:'Madhagadipet Police Station'
             
    },
    {
        lat:11.916202418836155,
        lng: 79.68628406420339,
        description:'Viluppuram Police Station'
    },
]

export default{
    CategoryListData,
    Hospital,
    volunteers,
    Fire_Station,
    DRA,
    Police
}