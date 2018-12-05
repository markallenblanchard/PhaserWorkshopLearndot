const { Workshop } = require('ldcli');

module.exports = function() {
    var workshop = Workshop({  name: "FullBlast Academy of Game", slug: "full-blast-academy-of-game", description: "A workshop to make a Game!" });

  workshop.Concept({ name: "Intro to Phaser", slug: "intro-to-phaser", draftMode: false })
      .Action({ name: "Context", slug: "context", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Goal & Starting Point", slug: "goal-&-startingpoint", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Phaser Cycle", slug: "phaser-cycle", draftMode: false, visibilityLevel: 1 })
      .Action({ name: "Config File", slug: "config-file", draftMode: false, visibilityLevel: 1 })
    .Concept({ name: "Adding Scenes", slug: "adding-scenes", draftMode: true })
      .Action({ name: "Explanation", slug: "explanation", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Sprites And Groups", slug: "adding-sprites-and-groups", draftMode: true })
      .Action({ name: "Background Preload", slug: "background-preload", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Background Create", slug: "background-create", draftMode: true, visibilityLevel: 2 })
      .Action({ name: "Making the Player", slug: "making-the-player", draftMode: true, visibilityLevel: 2 })
      .Action({ name: "Making the ground", slug: "making-the-ground", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Physics", slug: "adding-physics", draftMode: true })
      .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Applying Gravity", slug: "applying-gravity", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Movement", slug: "adding-movement", draftMode: true })
      .Action({ name: "Player Input", slug: "player-input", draftMode: false, visibilityLevel: 2 })
      .Action({ name: "Adding Jumps", slug: "adding-jumps", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Animations", slug: "adding-animations", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding More Game Objects", slug: "adding-more-game-objects", draftMode: true })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Attack", slug: "attack", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defense", slug: "defense", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding More Collisions", slug: "adding-more-collisions", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Adding Sound Effects", slug: "adding-sound-effects", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Custom Sounds", slug: "custom-sounds", draftMode: false })
      // .Action({ name: "Background", slug: "background", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Custom Sprites", slug: "custom-sprites", draftMode: false })
      // .Action({ name: "Backgound", slug: "backgound", draftMode: false, visibilityLevel: 2 })
      // .Action({ name: "Defend", slug: "defend", draftMode: false, visibilityLevel: 2 })
    .Concept({ name: "Conclusion", slug: "conclusion", draftMode: false })
      .Action({ name: "Review", slug: "review", draftMode: false, visibilityLevel: 2 })

return workshop;
}
