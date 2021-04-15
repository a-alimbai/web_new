#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'my_django_app.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()

# To create Django project (fundamentals)
# My-project

# *  Python -m venv env
# *  Env\Scripts\activate
# *  pip install django
# *  django-admin startproject my_django
# *  cd my_django
# *  python manage.py startapp hellо

# При этом не забудьте написать hello в settings.py INSTALLED_APPS 'hello'

# *  python manage.py runserver
# *  python manage.py createsuperuser
# *  python manage.py migrate 
# *  python manage.py createsuperuser
# *  python manage.py runserver



# https://www.youtube.com/watch?v=LQTMqGns7Co
