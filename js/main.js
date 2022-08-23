/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Néhémie Zahrane
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let TemperatureCelcius = Number( prompt('enter a température en celcius'));
  let TemperatureFahrenheit =   TemperatureCelcius * 9 / 5 + 32;

  //alert('bonjour, ${TemperatureFahrenheit} ! ') ;
  alert(TemperatureFahrenheit) ;


  //[°F] = [°C] x 9 / 5 + 32




}()); // Main IIFE

