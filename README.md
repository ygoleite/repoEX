# Repo.Ex


## Introduction
> Repo.Ex has as purpose to make the repository migration more easy. In only 3 steps you do a hard and boring work. Built only with ctools (Bootstrap) and PDI (Kettle), our approach was for integration and compatibility. The Repo.Ex plugin was tested in pentaho BI 6.0 to above and worked perfectly in all tested versions.

>> Attention: Repo.Ex only exchanges your repository, but artefact’s migration need to be manually. If you have a production  BI Server, first backup your repository data, do a migration of a new BI Server in a dev environment, test if everything is right, and after repeat the same proccess to production environment.

## Requirements

> - Latest Ctools Version (update in marketplace);
- Pentaho BI Server 6.0 to above. (Can work in older versions, but wasn't tested.)
- Your DBMS connections

## Instalation or Deploy

> - Clone or unzip inside *your/pentaho-server/pentaho-solutions/system/* and you'll se a folder named *repoEX*. After you execute the deploy, restart your server and open it as admin user. Open the *Tools* menu, and click in RepoEx

## Quick Start

> - First Step - Execute your DBMS scripts for Quartz, Hibernate and Jackrabbit , localized into *your/pentaho-server/pentaho-solutions/system/repoEX/Scripts*;
- Second Step - Open the Biserver, access the plugin in menu *Tools*, type your DBMS information in the form and click in the button "*Exchange my repository!*"
- Third Step - Restart your BI Server. If you have setted your correctly information, you'll be with your new repository setted.

## JDBC

> Repo.Ex has the most recents JDBCs Drivers. If you want, could check the option "*Install JDBC Drivers?*" after choose your DBMS and the plugin will install it for you.

## Debug Mode

> - Repo.Ex has a debug mode, which does not overwrite your old repository connection letting it to you do manually. For it, you need to mark the option in the end of the form and, then, exchange manually the connection files.

## Conclusion

> Repo.EX is our first plugin, please help us to make it better. Leave your comment or [issue](https://github.com/ygoleite/repoEX/issues) in issues section, or send us a e-mail to [ygo.leite@oncase.com.br](ygo.leite@oncase.com.br) or [rodrigo.muniz@oncase.com.br](rodrigo.muniz@oncase.com.br). Watch and give a Star to the repository, to keep yourself updated about issues, news and updates..
