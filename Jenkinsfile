pipeline {
    agent any
    environment{
        DOCKER_TAG = "latest"
        DOCKER_CREDS = credentials('Docker_user') 
        KUBECONFIG = '/var/lib/jenkins/.kube/config'
    }

    stages {
        stage('Git Clone') {
            steps {
                git url:'https://github.com/rohitDev450/Password-Generator.git', branch:'main'
            }
       }
       stage('Docker Login') {
            steps {
                sh "echo $DOCKER_CREDS_PSW | docker login -u $DOCKER_CREDS_USR --password-stdin"
          }
       }
        stage('Docker Build') {
            steps {
                   sh "docker build -t rohitar/password-generator:${DOCKER_TAG} ."
            }
        }
         stage('Test Code') {
            steps {
                   echo "Code is testing by devloper"
            }
        }
        stage('Docker Image Push') {
            steps {
                sh "docker push rohitar/password-generator:${DOCKER_TAG}"
                    }
           }
        stage('Code Deploy') {
            steps {
                  sh """
                   kubectl apply -f ${WORKSPACE}/k8s/passGen-deployment.yml
                   kubectl apply -f ${WORKSPACE}/k8s/passGen-service.yml
                    """
            }
          }
     }
}
