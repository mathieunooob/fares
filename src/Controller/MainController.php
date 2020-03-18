<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="start")
     */
    public function start(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('start/start.html.twig');
    }

    /**
     * @Route("/page-d-inscription", name="register")
     */
    public function register(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('start/register.html.twig');
    }

    /**
     * @Route("/page-de-connexion", name="login")
     */
    public function login(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('start/login.html.twig');
    }
}