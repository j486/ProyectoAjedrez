import { Injectable } from '@angular/core';
import { Pieza } from '../interfaces/pieza';

@Injectable({
  providedIn: 'root'
})
export class FichasService {

  constructor() { }

  peonNegro: Pieza = {
    color: 'negro',
    figura: 'peon',
    posicion: ''
  }

  peonBlanco: Pieza = {
    color: 'blanco',
    figura: 'peon',
    posicion: ''
  }

  reyNegro: Pieza = {
    color: 'negro',
    figura: 'rey',
    posicion: ''
  }

  reyBlanco: Pieza = {
    color: 'blanco',
    figura: 'rey',
    posicion: ''
  }

  caballoNegro: Pieza = {
    color: 'negro',
    figura: 'caballo',
    posicion: ''
  }

  caballoBlanco: Pieza = {
    color: 'blanco',
    figura: 'caballo',
    posicion: ''
  }

  alfilNegro: Pieza = {
    color: 'negro',
    figura: 'alfil',
    posicion: ''
  }

  alfilBlanco: Pieza = {
    color: 'blanco',
    figura: 'alfil',
    posicion: ''
  }

  damaNegra: Pieza = {
    color: 'negra',
    figura: 'dama',
    posicion: ''
  }

  damaBlanca: Pieza = {
    color: 'blanca',
    figura: 'dama',
    posicion: ''
  }

  torreNegra: Pieza = {
    color: 'negra',
    figura: 'torre',
    posicion: ''
  }

  torreBlanca: Pieza = {
    color: 'blanca',
    figura: 'torre',
    posicion: ''
  }

  piezaVacia: Pieza = {
    color: '',
    figura: '',
    posicion: ''
  }

  piezasNegras: Array<Pieza> = [this.torreNegra,this.caballoNegro,this.alfilNegro,this.damaNegra,this.reyNegro,this.alfilNegro,this.caballoNegro,this.torreNegra];

  piezasBlancas: Array<Pieza> = [this.torreBlanca,this.caballoBlanco,this.alfilBlanco,this.damaBlanca,this.reyBlanco,this.alfilBlanco,this.caballoBlanco,this.torreBlanca];


}
