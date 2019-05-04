import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class JugadoresComponent extends Component {
    @service('user_selected') user_global;
    @tracked games = this.args.games || [];
    @tracked user_id="3";
}
