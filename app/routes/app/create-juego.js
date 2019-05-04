import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppCreateJuegoRoute extends Route {
    model(){
        return hash({
            users: this.store.findAll('user'),
            games: this.store.findAll('game'),
        });
    }
}
