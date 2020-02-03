import sequelize from 'sequelize'
import _ from 'lodash'
import Faker from 'faker'

const Conn = new Sequelize('The-Fenix_blog', 'postgres', 'rosen', {
  dialect: 'postgres',
  host: 'localhost'
})

const User = sequelize.define('User', {
  userName: DataTypes.STRING,
  password: DataTypes.STRING,
  email: DataTypes.STRING,
  avatarUrl: DataTypes.TEXT
})

const BlogPost = sequelize.define('BlogPost', {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  imageUrl: DataTypes.TEXT
})

const BlogPostCategory = sequelize.define('BlogPostCategory', {
  title: DataTypes.STRING
})

const Comment = sequelize.define('comment', {
  text: DataTypes.TEXT
})

//Asssociations
//User
User.hasMany(BlogPost)
User.hasMany(Comment)

//BlogPost
BlogPost.belognsTo(User)
BlogPost.belognsTo(BlogPostCategory)
BlogPost.hasMany(Comment)

//Blog Post Category
BlogPostCategory.hasMany(BlogPost)

//Comment
Comment.belognsTo(BlogPost)
Comment.belognsTo(User)

Conn.sync({ force: true }).then(() => {
  _.times(10, () => {
    return User.create({
      userName: Faker.name.userName(),
      password: Faker.password.password(),
      email: Faker.internet.email(),
      avatarUrl: Faker.internet.imageUrl()
    })
  })
})

export default Conn
