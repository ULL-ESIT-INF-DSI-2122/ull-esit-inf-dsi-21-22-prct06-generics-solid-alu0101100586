import {Dragon_Ball} from "./dragon_ball";
import {Elden_Ring} from "./elden_ring";
import {Marvel} from "./marvel";
import {Pokemon} from "./pokemon";
import {Star_Wars} from "./star_wars";
import {Fighter} from "./fighter";

export class Combat <T extends Fighter, U extends Fighter> {
  constructor(protected fighter_a: T, protected fighter_b: U) { }

  start(): string {
    console.log(this.fighter_a.getName() + ' vs ' + this.fighter_b.getName());
    let winner: boolean = this.combat();
    if(winner) {
      console.log(this.fighter_a + ' es el ganador');
      return this.fighter_a.getName();
    } else {
      console.log(this.fighter_b + ' es el ganador');
      return this.fighter_b.getName();
    }
  }

  speed(): boolean {
    return (this.fighter_a.getSpeed() >= this.fighter_b.getSpeed())
  }

  power(fighter_a: Fighter, fighter_b: Fighter, power: number): number {
    let aux: number = 0;
    switch (power) {
      case 1: // low
        aux = 0.5;
        break;
      
      case 2: // neutral
        aux = 1;
        break;

      case 3: //high
        aux = 2;
        break;
    }
    return 50 * (fighter_a.getAttack() / fighter_b.getDefense()) * aux;
  }

  damage(fighter_a: Fighter, fighter_b: Fighter): number {
    let damage: number = 0;
    if(fighter_a instanceof Dragon_Ball) {
      if(fighter_b instanceof Dragon_Ball) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Elden_Ring) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Marvel) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
      if(fighter_b instanceof Pokemon) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
      if(fighter_b instanceof Star_Wars) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
    }

    if(fighter_a instanceof Elden_Ring) {
      if(fighter_b instanceof Dragon_Ball) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Elden_Ring) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Marvel) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
      if(fighter_b instanceof Pokemon) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
      if(fighter_b instanceof Star_Wars) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
    }

    if(fighter_a instanceof Marvel) {
      if(fighter_b instanceof Dragon_Ball) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Elden_Ring) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Marvel) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Pokemon) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
      if(fighter_b instanceof Star_Wars) {
        damage = this.power(fighter_a, fighter_b, 3);
      }
    }

    if(fighter_a instanceof Pokemon) {
      if(fighter_b instanceof Dragon_Ball) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Elden_Ring) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Marvel) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Pokemon) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Star_Wars) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
    }

    if(fighter_a instanceof Star_Wars) {
      if(fighter_b instanceof Dragon_Ball) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Elden_Ring) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Marvel) {
        damage = this.power(fighter_a, fighter_b, 1);
      }
      if(fighter_b instanceof Pokemon) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
      if(fighter_b instanceof Star_Wars) {
        damage = this.power(fighter_a, fighter_b, 2);
      }
    }

    return damage;
  }


  combat(): boolean {
    let healt_a: number = this.fighter_a.getHealt();
    let healt_b: number = this.fighter_b.getHealt();
    let speed_t: boolean = this.speed();
    while(true) {
      if(speed_t) {
        //a ataca a b
        console.log(this.fighter_a.getCatchingPhrase());
        healt_b -= this.damage(this.fighter_a, this.fighter_b);
        if(healt_b <= 0) {
          console.log(this.fighter_b.getName() + ' pereció en batalla');
          return true;
        } 
        console.log(this.fighter_b.getName() + ' quedó con ' + healt_b + ' hp');

        //b ataca a a
        console.log(this.fighter_b.getCatchingPhrase());
        healt_a -= this.damage(this.fighter_b, this.fighter_a);
        if(healt_a <= 0) {
          console.log(this.fighter_a.getName() + ' pereció en batalla');
          return false;
        }
        console.log(this.fighter_a.getName() + ' quedó con ' + healt_a + ' hp');

      } else {
        //b ataca a a 
        console.log(this.fighter_b.getCatchingPhrase());
        healt_a -= this.damage(this.fighter_b, this.fighter_a);
        if(healt_a <= 0) {
          console.log(this.fighter_a.getName() + ' pereció en batalla');
          return false;
        }
        console.log(this.fighter_a.getName() + ' quedó con ' + healt_a + ' hp');

        //a ataca a b
        console.log(this.fighter_a.getCatchingPhrase());
        healt_b -= this.damage(this.fighter_a, this.fighter_b);
        if(healt_b <= 0) {
          console.log(this.fighter_b.getName() + ' pereció en batalla');
          return true;
        } 
        console.log(this.fighter_b.getName() + ' quedó con ' + healt_b + ' hp');
      }
    }
  }
}