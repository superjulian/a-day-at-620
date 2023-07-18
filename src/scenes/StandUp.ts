import Phaser from 'phaser'
import {Character} from '../classes/character.js'

export default class StandUp extends Phaser.Scene {
	player: Character | undefined
	constructor() {
		super('StandUp')
	}


	create() {
		const x = 300
		const y = 350
		this.add.image(350,250, 'elevators')

        let chair3 = this.add.image(400,200, 'chair')
        chair3.flipX = true
        let chair4 = this.add.image(550,200, 'chair')
        chair4.flipX = true
        this.add.image(250,200, 'chair')
        this.add.image(70,300, 'chair')


        this.add.image(350,250, 'desk')

		this.add.image(250,370, 'chair')
        let chair2 = this.add.image(500,370, 'chair')
        chair2.flipX = true

        this.player = new Character(this, x, y, 'hope')		


	}
	update(): void {
		this.player?.update()
	}
}
