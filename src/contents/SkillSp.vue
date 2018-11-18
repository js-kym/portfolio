<template>
  <div class="contents-skill">
    <div class="main">
      <div class="explain">Skill / Year's Experience / Level</div>
      <div class="skill" v-for="(sValue, sKey, sIndex) in data" :key="sIndex">
        <div>{{sKey}}</div>
        <ul v-for="(iValue, iKey, iIndex) in sValue" :key="iIndex">
          <li>
            <div class="name">{{iKey}}</div>
            <div class="year">{{iValue.year + ' Year'}}</div>
            <div class="rating">
              <star-rating
                :rating="iValue.rating"
                :read-only="true"
                :show-rating="false"
                :star-size="20"
                active-color="#ff9234"
              ></star-rating>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'contents-skill',
  components: {
    StarRating
  },
  data () {
    return {
      data: {
        'Frontend': {
          'HTML': {
            'year': 3,
            'rating': 4
          },
          'CSS': {
            'year': 3,
            'rating': 4
          },
          'JavaScript': {
            'year': 3,
            'rating': 4
          },
          'jQuery': {
            'year': 2,
            'rating': 4
          },
          'Vue.js': {
            'year': 1,
            'rating': 3
          },
          'webpack': {
            'year': 1,
            'rating': 3
          }
        },
        'Backend': {
          'PHP': {
            'year': 4,
            'rating': 2
          },
          'Perl': {
            'year': 1,
            'rating': 1
          }
        },
        'DB': {
          'MySql': {
            'year': 5,
            'rating': 3
          },
          'AWS DynamoDB': {
            'year': 1,
            'rating': 2
          }
        },
        'Other': {
          'AS3.0': {
            'year': 1,
            'rating': 4
          },
          'AS1.0': {
            'year': 4,
            'rating': 5
          },
          'Git': {
            'year': 4,
            'rating': 3
          },
          'SVN': {
            'year': 1,
            'rating': 2
          }
        },
        'Tool': {
          'Animate': {
            'year': 5,
            'rating': 5
          },
          'VS Code': {
            'year': 0.5,
            'rating': 3
          },
          'WinSCP': {
            'year': 6,
            'rating': 4
          },
          'Poderosa': {
            'year': 5,
            'rating': 3
          },
          'WinMarge': {
            'year': 6,
            'rating': 4
          },
          'SourceTree': {
            'year': 2,
            'rating': 4
          }
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents-skill {
  width: 100%;
  height: 100%;
  color: #000000;
}
h1 {
  position: relative;
  width: 120px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 15px;
  font-family: 'Play', sans-serif;
  border-bottom: 5px solid #ff9234;
}
.main {
  position: relative;
  width: 100%;
  text-align: center;
  display: inline-block;
  margin-top: 10px;
}
  .main .explain {
    width: 300px;
    height: 26px;
    line-height: 26px;
    border-radius: 10px;
    background-color: #ffcd3c;
    margin: auto;
    font-family: 'Play', sans-serif;
    margin-bottom: 10px;
  }
  .main .skill {
    border: 2px solid #ffcd3c;
    border-radius: 10px;
    padding: 10px;
    margin: 0 10px;
    margin-bottom: 15px;
  }
  .main .skill > div:first-child {
    /* width: 100px; */
    padding: 0 10px;
    display: inline-block;
    border-bottom: 3px solid #ffcd3c;
    margin-bottom: 10px;
    font-family: 'Play', sans-serif;
    font-size: 1.5rem;
  }
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
  font-family: 'Play', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;

}
  li div {
    width: 100px;
  }
</style>
