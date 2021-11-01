import React, { Component }  from "react";
import {View,Text,Stylesheet,Image, Alert} from "react-native";

export default class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            details:{},
            imagePath:'',
            url:'`http://localhost:5000/planet?name=${this.props.navigation.getParam( "planet_name" )}'
        }
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails=()=>{
        const {url}=this.state
        axios
        .get(url)
        .then(response=>{
            this.setDetails(response.data.data)
        })
        .catch(error=>{
            Alert.alert(error.message())
        })
    }

    setDetails=planet_details=>{
        const planet_type=planet_details.planet_type
        let imagePath = "";
        switch(planet_type){
            case "Gas Giant":
                imagePath = require("../images/gas-giant");
                break;
            case "Terrestial":
                imagePath = require("../images/terrestrial");
                break;
            case "Super Earth":
                imagePath = require("../images/super_earth");
                break;
            case "Neptune Like":
                imagePath = require("../images/neptune_like");
                break
            default:
                imagePath = require("../images/gas-giant");
        }
        this.setState({
            details:planet_details,
            imagePath:imagePath
        })
    }

    render(){
        return(
            <View>
            <Text>
                Details Screen
            </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({ container: { flex: 1 }, cardItem: { marginBottom: 10 } });