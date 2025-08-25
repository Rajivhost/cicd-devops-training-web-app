import { Day } from '../types';

export const trainingData: Day[] = [
  {
    id: 'jour1',
    title: 'Jour 1: Fondamentaux CI/CD et premiers workflows',
    description: 'Introduction aux concepts de base et création des premiers pipelines',
    modules: [
      {
        id: 'intro-cicd',
        title: 'Introduction au CI/CD',
        content: 'Le CI/CD (Continuous Integration/Continuous Deployment) est une méthodologie qui permet d\'automatiser l\'intégration et le déploiement du code. Cette approche réduit les erreurs manuelles et accélère le cycle de développement.',
        completed: false
      },
      {
        id: 'concepts-devops',
        title: 'Concepts DevOps fondamentaux',
        content: 'DevOps unit le développement (Dev) et les opérations (Ops) pour améliorer la collaboration et l\'efficacité. Les principes incluent l\'automatisation, la surveillance continue et l\'amélioration itérative.',
        completed: false
      },
      {
        id: 'premiers-workflows',
        title: 'Création des premiers workflows',
        content: 'Les workflows définissent les étapes automatisées de votre pipeline. Nous apprendrons à créer des workflows simples avec des actions de test, build et déploiement.',
        completed: false
      },
      {
        id: 'outils-integration',
        title: 'Outils d\'intégration continue',
        content: 'Découverte des principaux outils CI : Gitea Actions, Jenkins, GitLab CI. Nous nous concentrerons sur Gitea Actions pour sa simplicité et son intégration native avec Git.',
        completed: false
      }
    ],
    quiz: {
      id: 'quiz-jour1',
      title: 'Quiz Jour 1 - Fondamentaux CI/CD',
      questions: [
        {
          id: 'q1-1',
          question: 'Que signifie l\'acronyme CI/CD ?',
          options: [
            'Continuous Integration / Continuous Deployment',
            'Code Integration / Code Delivery', 
            'Continuous Improvement / Continuous Development',
            'Client Integration / Client Deployment'
          ],
          correctAnswer: 0,
          explanation: 'CI/CD signifie Continuous Integration (Intégration Continue) et Continuous Deployment (Déploiement Continu).'
        },
        {
          id: 'q1-2',
          question: 'Quel est l\'objectif principal de DevOps ?',
          options: [
            'Séparer le développement des opérations',
            'Unir le développement et les opérations pour améliorer la collaboration',
            'Remplacer les développeurs par des outils automatisés',
            'Accélérer uniquement le développement'
          ],
          correctAnswer: 1,
          explanation: 'DevOps vise à unir les équipes de développement et d\'opérations pour améliorer la collaboration et l\'efficacité.'
        }
      ]
    }
  },
  {
    id: 'jour2',
    title: 'Jour 2: CI avancé, Docker Registry et Kubernetes',
    description: 'Approfondissement des techniques CI et introduction aux conteneurs',
    modules: [
      {
        id: 'ci-avance',
        title: 'Techniques CI avancées',
        content: 'Exploration des stratégies avancées : tests parallèles, cache des dépendances, matrices de build pour supporter plusieurs environnements simultanément.',
        completed: false
      },
      {
        id: 'docker-registry',
        title: 'Docker Registry et conteneurisation',
        content: 'Comprendre les registres Docker, créer et gérer des images de conteneurs. Introduction aux bonnes pratiques de sécurité pour les images Docker.',
        completed: false
      },
      {
        id: 'kubernetes-intro',
        title: 'Introduction à Kubernetes',
        content: 'Kubernetes est un orchestrateur de conteneurs qui automatise le déploiement, la mise à l\'échelle et la gestion des applications conteneurisées.',
        completed: false
      },
      {
        id: 'pipelines-avances',
        title: 'Pipelines de déploiement avancés',
        content: 'Construction de pipelines complexes avec des étapes conditionnelles, gestion des environnements multiples et stratégies de rollback.',
        completed: false
      }
    ],
    quiz: {
      id: 'quiz-jour2',
      title: 'Quiz Jour 2 - CI Avancé et Conteneurs',
      questions: [
        {
          id: 'q2-1',
          question: 'Quel est l\'avantage principal de la conteneurisation avec Docker ?',
          options: [
            'Réduire la taille du code',
            'Assurer la portabilité et l\'isolation des applications',
            'Accélérer uniquement le développement',
            'Remplacer les serveurs physiques'
          ],
          correctAnswer: 1,
          explanation: 'Docker assure la portabilité et l\'isolation des applications, permettant un déploiement cohérent dans différents environnements.'
        },
        {
          id: 'q2-2',
          question: 'Que permet Kubernetes ?',
          options: [
            'Créer des conteneurs Docker',
            'Orchestrer et gérer des conteneurs à grande échelle',
            'Remplacer Docker',
            'Développer des applications'
          ],
          correctAnswer: 1,
          explanation: 'Kubernetes orchestre et gère des conteneurs à grande échelle, automatisant le déploiement et la mise à l\'échelle.'
        }
      ]
    }
  },
  {
    id: 'jour3',
    title: 'Jour 3: GitOps, Infrastructure as Code et pipeline complet',
    description: 'Maîtrise des pratiques GitOps et infrastructure automatisée',
    modules: [
      {
        id: 'gitops-intro',
        title: 'Introduction à GitOps',
        content: 'GitOps utilise Git comme source de vérité pour l\'infrastructure et les applications. Tous les changements passent par des pull requests, assurant traçabilité et rollback.',
        completed: false
      },
      {
        id: 'argocd',
        title: 'Argo CD en pratique',
        content: 'Argo CD automatise le déploiement des applications Kubernetes en surveillant les dépôts Git. Configuration et gestion des applications avec Argo CD.',
        completed: false
      },
      {
        id: 'cdk8s',
        title: 'Infrastructure as Code avec CDK8s',
        content: 'CDK8s permet de définir l\'infrastructure Kubernetes avec du code TypeScript, Python ou autres langages, offrant type safety et réutilisabilité.',
        completed: false
      },
      {
        id: 'securite-monitoring',
        title: 'Sécurité et monitoring',
        content: 'Implémentation des bonnes pratiques de sécurité : scan des vulnérabilités, gestion des secrets, monitoring des performances et alertes.',
        completed: false
      },
      {
        id: 'pipeline-complet',
        title: 'Pipeline complet de production',
        content: 'Assemblage d\'un pipeline complet : du commit au déploiement en production, incluant tous les contrôles qualité et sécurité.',
        completed: false
      }
    ],
    quiz: {
      id: 'quiz-jour3',
      title: 'Quiz Jour 3 - GitOps et Infrastructure',
      questions: [
        {
          id: 'q3-1',
          question: 'Quel est le principe fondamental de GitOps ?',
          options: [
            'Utiliser uniquement Git pour le code',
            'Git comme source de vérité pour l\'infrastructure et les applications',
            'Remplacer tous les outils par Git',
            'Déployer manuellement depuis Git'
          ],
          correctAnswer: 1,
          explanation: 'GitOps utilise Git comme source de vérité unique pour l\'infrastructure et les applications, tous les changements passant par Git.'
        },
        {
          id: 'q3-2',
          question: 'Que permet CDK8s ?',
          options: [
            'Créer des clusters Kubernetes',
            'Définir l\'infrastructure Kubernetes avec du code',
            'Remplacer Kubernetes',
            'Surveiller les applications'
          ],
          correctAnswer: 1,
          explanation: 'CDK8s permet de définir l\'infrastructure Kubernetes avec du code dans différents langages, offrant type safety et réutilisabilité.'
        }
      ]
    }
  }
];

export const courseOverview = {
  title: 'Formation CI/CD DevOps',
  subtitle: 'Bienvenue dans cette formation complète sur l\'intégration et le déploiement continus (CI/CD) avec une approche DevOps moderne.',
  duration: '3 jours',
  description: 'Cette formation de 3 jours vous permettra de maîtriser les concepts et outils essentiels du CI/CD, depuis les fondamentaux jusqu\'aux pratiques GitOps avancées.'
};

export const objectives = [
  'Comprendre les concepts fondamentaux du CI/CD et DevOps',
  'Maîtriser les outils d\'intégration continue (Gitea Actions)',
  'Implémenter des pipelines de déploiement continu',
  'Découvrir les pratiques GitOps avec Argo CD',
  'Gérer l\'infrastructure as Code avec CDK8s',
  'Appliquer les bonnes pratiques de sécurité et monitoring'
];

export const prerequisites = [
  'Connaissance de base de Git et des systèmes de contrôle de version',
  'Familiarité avec les concepts de développement logiciel',
  'Notions de base sur les conteneurs Docker (optionnel mais recommandé)',
  'Accès à un environnement de développement avec Git installé',
  'Compte sur une plateforme Git (GitHub, GitLab, ou Gitea)',
  'Terminal/ligne de commande de base'
];