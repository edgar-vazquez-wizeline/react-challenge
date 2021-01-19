import React from "react";

export function PokeCard(props) {
	let card = (
		<div class="row card" style={{ backgroundColor: "#FFCA32" }}>
			<div
				class="col-10 offset-1"
				style={{
					marginTop: "1rem",
					marginBottom: "1rem",
					padding: "1rem",
					background:
						"linear-gradient(135deg,  #ffb389 0%,#f53458 10%,#ffb389 20%,#f53458 30%,#ffb389 40%,#f53458 50%,#ffb389 60%,#f53458 70%,#f53458 70%,#ffb389 80%,#f53458 90%,#ffb389 100%)"
				}}
			>
				<div class="row">
					<div class="col-12">
						<h1 class="card-title">{props.name}</h1>
					</div>
					<div class="col-6">
						<img
							src={props.front_default}
							class="card-img-top"
							alt={props.name}
						/>
					</div>
					<div class="col-6">
						<img
							src={props.front_shiny}
							class="card-img-top"
							alt={props.name}
						/>
					</div>
					<div class="col-12">
						<a
							type="button"
							class="btn btn-primary"
							href={props.video}
							target="blank"
						>
							{props.name} video
						</a>
					</div>
				</div>
			</div>
		</div>
	);
	return card;
}
