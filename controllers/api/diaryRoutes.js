const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async(req, res)=> {
  try{
    const postData= await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['userName']
        }
      ]
    });
    const post = postData.map((post)=> post.get({plain: true}));

    res.render('dashboard', {
      post,
      logged_in: req.session.logged_in
    });
  }
  catch(err){
    res.status(500).json(err);
  }
})

  router.get('/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['userName'],
          },
        ],
      });
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// saving new diary entry to database
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     console.log("you have made it to this point")
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['userName'],
//         },
//       ],
//     });
//     const post = postData.get({ plain: true });
    
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });
    
//     console.log(postData.dataValues.posts);
//     res.render('dashboard', {
//       ...post,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;