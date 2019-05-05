import Component from '@glimmer/component';

export default class TablaJuegosComponent extends Component {
    @service('user_selected') user_global;
    @tracked games = this.args.games || [];
    @tracked user_id="3";
}
