function uciWeightLimit(valNum) {
  if (valNum >= 6.8) {
      return document.getElementById("UCIverdict").innerHTML = "Bike is legal...";
  } else {
      return document.getElementById("UCIverdict").innerHTML = "Bike is illegal...";
  }
};

// #1 Road Bike

function road_bike_weight(valNum) {
  if (valNum < 6.8) {
      return document.getElementById("road_bike_verdict").innerHTML = "Bike | Too Light...";
  } else if (valNum == 6.8) {
      return document.getElementById("road_bike_verdict").innerHTML = "Bike | Very Light...";
  } else if(valNum <= 7.5) {
      return document.getElementById("road_bike_verdict").innerHTML = "Bike | Light...";
  } else if(valNum <= 10) {
      return document.getElementById("road_bike_verdict").innerHTML = "Bike | Heavy...";
  } else if(valNum > 10) {
      return document.getElementById("road_bike_verdict").innerHTML = "Bike | Too Heavy...";
  } else if(valNum == null) {
    return document.getElementById("road_bike_verdict").innnerHTML = " "
  }
};

function road_wheelset_weight(valNum) {
  if (valNum <= 1.250) {
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Super Light...";
  } else if(valNum <= 1.500) {
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Very Light...";
  } else if(valNum <= 2.0) {
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Light...";
  } else if(valNum <= 2.5) {
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Heavy...";
  } else if(valNum <= 3.0){
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Very Heavy...";
  } else if(valNum > 3.0){
      return document.getElementById("road_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
  } else if(valNum == null) {
    return document.getElementById("road_wheelset_verdict").innnerHTML = " "
  }
};

function road_frameset_weight(valNum) {
  if (valNum <= 4) {
      return document.getElementById("road_frameset_verdict").innerHTML = "Frameset | Super Light...";
  } else if(valNum <= 5) {
      return document.getElementById("road_frameset_verdict").innerHTML = "Frameset | Light...";
  } else if(valNum <= 6) {
      return document.getElementById("road_frameset_verdict").innerHTML = "Frameset | Heavy...";
  } else if(valNum <= 7) {
      return document.getElementById("road_frameset_verdict").innerHTML = "Frameset | Very Heavy...";
  } else if(valNum > 8) {
      return document.getElementById("road_frameset_verdict").innerHTML = "Frameset | Too Heavy...";
  } else if(valNum == null) {
    return document.getElementById("road_frameset_verdict").innnerHTML = " "
  }
};

// #2 MTB Bike

function MTB_bike_weight(valNum) {
    if (valNum < 6.8) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Too Light...";
    } else if (valNum == 6.8) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Super Light...";
    } else if(valNum <= 9) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Very Light...";
    } else if(valNum <= 11) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Light...";
    } else if(valNum <= 13) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Heavy...";
    } else if(valNum <= 16) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Very Heavy...";
    } else if(valNum >= 17) {
        return document.getElementById("MTB_bike_verdict").innerHTML = "Bike | Too Heavy..."
    }
  };
  
  function MTB_wheelset_weight(valNum) {
    if (valNum <= 2.100) {
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Super Light...";
    } else if(valNum <= 2.500) {
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Very Light...";
    } else if(valNum <= 3.000) {
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Light...";
    } else if(valNum <= 3.500) {
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Heavy...";
    } else if(valNum <= 4.000){
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Very Heavy...";
    } else if(valNum <= 4.500){
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
    } else if(valNum >= 5.000){
        return document.getElementById("MTB_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
    }
  };
  
  function MTB_frameset_weight(valNum) {
    if (valNum <= 4) {
        return document.getElementById("MTB_frameset_verdict").innerHTML = "Frameset | Super Light...";
    } else if(valNum <= 5) {
        return document.getElementById("MTB_frameset_verdict").innerHTML = "Frameset | Light...";
    } else if(valNum <= 6) {
        return document.getElementById("MTB_frameset_verdict").innerHTML = "Frameset | Heavy...";
    } else if(valNum <= 7) {
        return document.getElementById("MTB_frameset_verdict").innerHTML = "Frameset | Very Heavy...";
    } else if(valNum > 8) {
        return document.getElementById("MTB_frameset_verdict").innerHTML = "Frameset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("MTB_frameset_verdict").innnerHTML = " "
    }
  };

  // #3 Gravel Bike

  function Gravel_bike_weight(valNum) {
    if (valNum < 6.8) {
        return document.getElementById("Gravel_bike_verdict").innerHTML = "Bike | Too Light...";
    } else if (valNum == 6.8) {
        return document.getElementById("Gravel_bike_verdict").innerHTML = "Bike | Super Light...";
    } else if(valNum <= 7.5) {
        return document.getElementById("Gravel_bike_verdict").innerHTML = "Bike | Very Light...";
    } else if(valNum <= 8) {
        return document.getElementById("Gravel_bike_verdict").innerHTML = "Bike | Light...";
    } else if(valNum <= 10) {
        return document.getElementById("Gravel_bike_verdict").innerHTML = "Bike | Heavy...";
    } else if(valNum >= 11) {
        return document.getElementById("Gravel_bike_verdict").innnerHTML = "Bike | Very Heavy...;"
    }
  };
  
  function Gravel_wheelset_weight(valNum) {
    if (valNum <= 1.250) {
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Super Light...";
    } else if(valNum <= 1.500) {
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Very Light...";
    } else if(valNum <= 2.0) {
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Light...";
    } else if(valNum <= 2.5) {
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Heavy...";
    } else if(valNum <= 3.0){
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Very Heavy...";
    } else if(valNum > 3.0){
        return document.getElementById("Gravel_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("Gravel_wheelset_verdict").innnerHTML = " "
    }
  };
  
  function Gravel_frameset_weight(valNum) {
    if (valNum <= 4) {
        return document.getElementById("Gravel_frameset_verdict").innerHTML = "Frameset | Super Light...";
    } else if(valNum <= 5) {
        return document.getElementById("Gravel_frameset_verdict").innerHTML = "Frameset | Light...";
    } else if(valNum <= 6) {
        return document.getElementById("Gravel_frameset_verdict").innerHTML = "Frameset | Heavy...";
    } else if(valNum <= 7) {
        return document.getElementById("Gravel_frameset_verdict").innerHTML = "Frameset | Very Heavy...";
    } else if(valNum > 8) {
        return document.getElementById("Gravel_frameset_verdict").innerHTML = "Frameset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("Gravel_frameset_verdict").innnerHTML = " "
    }
  };

  // #4 CX Bike

  function CX_bike_weight(valNum) {
    if (valNum < 6.8) {
        return document.getElementById("CX_bike_verdict").innerHTML = "Bike | Too Light...";
    } else if (valNum == 6.8) {
        return document.getElementById("CX_bike_verdict").innerHTML = "Bike | Very Light...";
    } else if(valNum <= 7.5) {
        return document.getElementById("CX_bike_verdict").innerHTML = "Bike | Light...";
    } else if(valNum <= 10) {
        return document.getElementById("CX_bike_verdict").innerHTML = "Bike | Heavy...";
    } else if(valNum > 10) {
        return document.getElementById("CX_bike_verdict").innerHTML = "Bike | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("CX_bike_verdict").innnerHTML = " "
    }
  };
  
  function CX_wheelset_weight(valNum) {
    if (valNum <= 1.250) {
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Super Light...";
    } else if(valNum <= 1.500) {
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Very Light...";
    } else if(valNum <= 2.0) {
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Light...";
    } else if(valNum <= 2.5) {
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Heavy...";
    } else if(valNum <= 3.0){
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Very Heavy...";
    } else if(valNum > 3.0){
        return document.getElementById("CX_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("CX_wheelset_verdict").innnerHTML = " "
    }
  };
  
  function CX_frameset_weight(valNum) {
    if (valNum <= 4) {
        return document.getElementById("CX_frameset_verdict").innerHTML = "Frameset | Super Light...";
    } else if(valNum <= 5) {
        return document.getElementById("CX_frameset_verdict").innerHTML = "Frameset | Light...";
    } else if(valNum <= 6) {
        return document.getElementById("CX_frameset_verdict").innerHTML = "Frameset | Heavy...";
    } else if(valNum <= 7) {
        return document.getElementById("CX_frameset_verdict").innerHTML = "Frameset | Very Heavy...";
    } else if(valNum > 8) {
        return document.getElementById("CX_frameset_verdict").innerHTML = "Frameset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("CX_frameset_verdict").innnerHTML = " "
    }
  };

  // #5 TT Bike

  function TT_bike_weight(valNum) {
    if (valNum < 6.8) {
        return document.getElementById("TT_bike_verdict").innerHTML = "Bike | Too Light...";
    } else if (valNum == 6.8) {
        return document.getElementById("TT_bike_verdict").innerHTML = "Bike | Very Light...";
    } else if(valNum <= 7.5) {
        return document.getElementById("TT_bike_verdict").innerHTML = "Bike | Light...";
    } else if(valNum <= 10) {
        return document.getElementById("TT_bike_verdict").innerHTML = "Bike | Heavy...";
    } else if(valNum > 10) {
        return document.getElementById("TT_bike_verdict").innerHTML = "Bike | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("TT_bike_verdict").innnerHTML = " "
    }
  };
  
  function TT_wheelset_weight(valNum) {
    if (valNum <= 1.250) {
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Super Light...";
    } else if(valNum <= 1.500) {
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Very Light...";
    } else if(valNum <= 2.0) {
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Light...";
    } else if(valNum <= 2.5) {
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Heavy...";
    } else if(valNum <= 3.0){
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Very Heavy...";
    } else if(valNum > 3.0){
        return document.getElementById("TT_wheelset_verdict").innerHTML = "Wheelset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("TT_wheelset_verdict").innnerHTML = " "
    }
  };
  
  function TT_frameset_weight(valNum) {
    if (valNum <= 4) {
        return document.getElementById("TT_frameset_verdict").innerHTML = "Frameset | Super Light...";
    } else if(valNum <= 5) {
        return document.getElementById("TT_frameset_verdict").innerHTML = "Frameset | Light...";
    } else if(valNum <= 6) {
        return document.getElementById("TT_frameset_verdict").innerHTML = "Frameset | Heavy...";
    } else if(valNum <= 7) {
        return document.getElementById("TT_frameset_verdict").innerHTML = "Frameset | Very Heavy...";
    } else if(valNum > 8) {
        return document.getElementById("TT_frameset_verdict").innerHTML = "Frameset | Too Heavy...";
    } else if(valNum == null) {
        return document.getElementById("TT_frameset_verdict").innnerHTML = " "
    }
  };