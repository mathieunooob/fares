<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DocController extends AbstractController
{
    /**
     * @Route("/envoyer-rapidement-un-document", name="fastSend")
     */
    public function fast(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('docTemplates/fastDoc.html.twig');
    }

    /**
     * @Route("/preparer-un-document", name="prepare")
     */
    public function prepare(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('docTemplates/prepareToSend.html.twig');
    }
    /**
     * @Route("/mes-documents-prepares", name="getReadyToSend")
     */
    public function getReadyToSend(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('docTemplates/readyToSend.html.twig');
    }
}