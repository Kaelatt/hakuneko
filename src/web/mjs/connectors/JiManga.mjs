import WordPressMadara from './templates/WordPressMadara.mjs';

export default class JiManga extends WordPressMadara {

    constructor() {
        super();
        super.id = 'jimanga';
        super.label = 'JiManga';
        this.tags = [ 'webtoon', 'english' ];
        this.url = 'https://jimanga.com';
    }
}
