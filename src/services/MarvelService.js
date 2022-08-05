import config from './config.json';

export class MarvelService {
    getCharacterUrl = config['characterUrl'];
    apiKey = config['apiKey'];
    baseOffset = 210;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw  new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };


    getAllCharacters = async (offset = this.baseOffset) => {
        const url = `${this.getCharacterUrl}characters?orderBy=name&limit=9&offset=${offset}&${this.apiKey}`;
        const res = await this.getResource(url);
        return res.data.results.map(this._transformCharacter);
    };

    getCharacterById = async (id) => {
        const getCharacterByIdUrl = `${this.getCharacterUrl}characters/${id}?${this.apiKey}`;
        const res = await this.getResource(getCharacterByIdUrl);
        return this._transformCharacter(res.data.results[0]);
    };

    _transformCharacter = (res) => {
        return {
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            comicsList: res['comics'].items
        };
    };
}