import mainScene from 'mainScene'
import mainLoad from 'mainLoad'

const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1000,
        height: 1900,
    },
    autoRound: false,
    dom: {
      createContainer: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    pixelArt: true,
    scene: [
        mainLoad,
        mainScene
    ]
}

const game = new Phaser.Game(config);

