FROM gradle:7.0.0-jdk11
COPY --chown=gradle:grade . .
WORKDIR .
RUN gradle build -x test --no-daemon
EXPOSE 8081
CMD ["gradle", "bootRun"]