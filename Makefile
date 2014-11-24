default:
	@echo "Sync git"
	@git pull

	@echo "Call Makefile in gcm-test-server folder"
	$(MAKE) -C gcm-server-test
