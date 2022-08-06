import config from './config.json';

export class MarvelService {
    prefUrl = config['prefUrl'];
    apiKey = config['apiKey'];
    baseCharOffset = 210;
    baseComicOffset = 0;

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw  new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    };

    _getData = async (url, offset) => {
        const reqUrl = `${this.prefUrl}${url}${offset}&${this.apiKey}`;
        return await this.getResource(reqUrl);
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

    getAllCharacters = async (offset = this.baseCharOffset) => {
        const res = await this._getData('characters?orderBy=name&limit=9&offset=', offset);
        return res.data.results.map(this._transformCharacter);
    };

    getCharacterById = async (id) => {
        const getCharacterByIdUrl = `${this.prefUrl}characters/${id}?${this.apiKey}`;
        const res = await this.getResource(getCharacterByIdUrl);
        return this._transformCharacter(res.data.results[0]);
    };

    _transformComic = (res) => {
        return {
            title: res['title'],
            description: res.description,
            thumbnail: res.thumbnail.path + '.' + res.thumbnail.extension,
            pageCount: res.pageCount,
            language: res['textObjects'][0].language,
            price: res['prices'][0].price
        };
    };

    getAllComics = async (offset = this.baseComicOffset) => {
        const res = await this._getData('comics?orderBy=modified&limit=8&offset=', offset);
        console.log(offset);
        return res.data.results.map(this._transformComic);
    };
}