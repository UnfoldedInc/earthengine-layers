#!/usr/bin/env python

"""The setup script."""

from setuptools import find_packages, setup

with open('README.md') as readme_file:
    readme = readme_file.read()

with open('CHANGELOG.md') as history_file:
    history = history_file.read()

with open('requirements.txt') as requirements_file:
    requirements = [l.strip() for l in requirements_file.readlines()]

with open('requirements_dev.txt') as test_requirements_file:
    test_requirements = [l.strip() for l in test_requirements_file.readlines()]

setup_requirements = ['setuptools >= 38.6.0', 'twine >= 1.11.0']

setup(
    author="Kyle Barron",
    author_email='kyle@unfolded.ai',
    python_requires='>=3.5',
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
    ],
    description="Pydeck wrapper for use with Google Earth Engine",
    install_requires=requirements,
    license="MIT license",
    long_description=readme + '\n\n' + history,
    long_description_content_type='text/markdown',
    include_package_data=True,
    keywords='pydeck_earthengine_layers',
    name='pydeck-earthengine-layers',
    packages=find_packages(include=['pydeck_earthengine_layers', 'pydeck_earthengine_layers.*']),
    setup_requires=setup_requirements,
    test_suite='tests',
    tests_require=test_requirements,
    url='https://github.com/UnfoldedInc/earthengine-layers/blob/master/py',
    version='1.2.0',
    zip_safe=False,
)
