pipeline{
 agent any
  
  stages {
    stage('build') {
      steps{
        echo "building application ..."
        bat """
          npm cache clean --force
        """
        bat """
          npm install
        """
      }
    }
    stage('test') {
      steps{
        echo "testing application ..."
        bat """
          ng test --watch=false
        """
      }
    }
    stage('deploy') {
      steps{
        echo "Deploying application ..."
        bat """
          ng build --prod
        """
        bat """
          xcopy dist\\my-unit-test G:\\NGINX\\html\\ /y /S /E
        """
      }
    }
  }
}
