<?php


namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UserController extends AbstractController
{
    /**
     * @Route("/reinitialisation-mot-de-passe", name="reinitPwd")
     */
    public function reinitPsswd()
    {
        return $this->render('user/forgetpsswd.html.twig');
    }

    /**
     * @Route("/page-d-accueil", name="home")
     */
    public function home()
    {
        return $this->render('user/home.html.twig');
    }
}