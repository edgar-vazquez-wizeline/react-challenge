import React from "react";
import "./styles.css";
import { PokeCard } from "./components/PokeCard.js";
import { mockPokemonData } from "./mock/pokeData";

export default function App() {
	return (
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div className="App">
						<h1>Welcome to your second mini challenge!</h1>
						<PokeCard
							name={mockPokemonData.name}
							front_default={mockPokemonData.sprites.front_default}
							front_shiny={mockPokemonData.sprites.front_shiny}
							video={mockPokemonData.video}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
