class ShameMailer < ActionMailer::Base
  default from: "\"Bizden Söylemesi\" <elci@nasilsoylesem.com>"
  
  def shame_mail(email, shame, choice)
    @email = email
    @shame = shame
    @choice = choice
    mail(to: @email, subject: 'Bir arkadaşının sana bir itirafı var')
  end
  
end
