const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			/*peoples: [
				{
					name: "Luke Skywalker",
					height: "172",
					mass: "77",
					hair_color: "blond",
					skin_color: "fair",
					eye_color: "blue",
					birth_year: "19BBY",
					gender: "male",
					homeworld: "http://swapi.dev/api/planets/1/",
					films: [
					*"http://swapi.dev/api/films/1/",
						"http://swapi.dev/api/films/2/",
						"http://swapi.dev/api/films/3/",
						"http://swapi.dev/api/films/6/"*/
			/*],
					/*species: [],
					vehicles: ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"],
					starships: ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"],
					created: "2014-12-09T13:50:51.644000Z",
					edited: "2014-12-20T21:17:56.891000Z",
					url: "http://swapi.dev/api/people/1/"
					},
					{
					name: "C-3PO",
					height: "167",
				mass: "75",
					hair_color: "n/a",
					skin_color: "gold",
					eye_color: "yellow",
					birth_year: "112BBY",
					gender: "n/a",
					homeworld: "http://swapi.dev/api/planets/1/",
					films: [
					"http://swapi.dev/api/films/1/",
					"http://swapi.dev/api/films/2/",
					"http://swapi.dev/api/films/3/",
					"http://swapi.dev/api/films/4/",
					"http://swapi.dev/api/films/5/",
					"http://swapi.dev/api/films/6/"
					],
					species: ["http://swapi.dev/api/species/2/"],
					vehicles: [],
					starships: [],
					created: "2014-12-10T15:10:51.357000Z",
					edited: "2014-12-20T21:17:50.309000Z",
					url: "http://swapi.dev/api/people/2/"
					},
					{
						name: "R2-D2",
					height: "96",
					mass: "32",
					hair_color: "n/a",
					skin_color: "white, blue",
					eye_color: "red",
					birth_year: "33BBY",
					gender: "n/a",
					homeworld: "http://swapi.dev/api/planets/8/",
					films: [
					"http://swapi.dev/api/films/1/",
					"http://swapi.dev/api/films/2/",
					"http://swapi.dev/api/films/3/",
					"http://swapi.dev/api/films/4/",
					"http://swapi.dev/api/films/5/",
					*"http://swapi.dev/api/films/6/"
					],
					species: ["http://swapi.dev/api/species/2/"],
					vehicles: [],
					starships: [],
					created: "2014-12-10T15:11:50.376000Z",
					edited: "2014-12-20T21:17:50.311000Z",
					url: "http://swapi.dev/api/people/3/"
				}*/
			/*],
			/*planets: [
				{ name: "Tierra", rotation_period: 2, orbital_period: 3 },
				{ name: "Saturno", rotation_period: 5, orbital_period: 2 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 },
				{ name: "Neptuno", rotation_period: 3, orbital_period: 1 }*/
			/*],*/

			favoritos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			loadPeoples: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data.results });
			},

			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data.results }); //para que los views consuman la data.*/
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//NOTA: getStore me permite obtener el valor (inmeditamente anterior) del store de manera segura.
			/*setStoreValorFavs: () => {
				setStore({ valor: getStore().valor + 1 });
			},*/

			addFavorites: fav => {
				setStore({ favoritos: getStore().favoritos.concat(fav) });
			},

			removeFavorites: index => {
				//Quiero retornar todos los elementos excepto el que se encuentra en el index
				const nuevoArrayFavs = getStore().favoritos.filter((item, indice) => {
					return indice !== index;
				});

				setStore({ favoritos: nuevoArrayFavs });
			}
		} //NotaEsto lo hacemos para cambiar el valor del store.
		//Para cambiar el valor, debemos utilizar setStore.
		//Cuando modifico setStore, modifico todo un objeto.
	};
};

export default getState;
