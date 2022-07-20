export class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw  new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    _getAllCharactersUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=ce81ad1cb9bf03ca43125025476adc9e';
    getAllCharacters = () => {
        return this.getResource(this._getAllCharactersUrl);
    };

    getCharacterById = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=ce81ad1cb9bf03ca43125025476adc9e`);
    };
}